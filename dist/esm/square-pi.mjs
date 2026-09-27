export const name="square-pi";
export const id="dl_27c979c38abb407bb26a";
export const url=new URL("../icons/square-pi.svg?v=4520f08b4e6096c29bc217323c15d80ca277a16e468c957056318caf7e561abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
