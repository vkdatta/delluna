export const name="zodiac-taurus";
export const id="dl_3be4147e2a084c7a9211";
export const url=new URL("../icons/zodiac-taurus.svg?v=a96d5d6eebaddaef43ca80edc95b8c181a8e0ce4e3ef39fa5d552649b9ecc49e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
