export const name="zodiac-capricorn";
export const id="dl_4315389c79e44f598360";
export const url=new URL("../icons/zodiac-capricorn.svg?v=79484ab2e6607816e5cb243ac45804c14323402ecdd6240a70fc3e0cfb7ef3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
