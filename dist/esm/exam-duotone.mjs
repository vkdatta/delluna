export const name="exam-duotone";
export const id="dl_572863321dde4db99836";
export const url=new URL("../icons/exam-duotone.svg?v=df23c9db9426126c64acb3e64206cdcc155971f52b31862965ad895d6eafe19b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
