export const name="arrow-elbow-left-up";
export const id="dl_878c0241197044d5b900";
export const url=new URL("../icons/arrow-elbow-left-up.svg?v=1021287e2fb4952d0b1df45921e4a6a7b3b6db53557b332dcda022ec899c3fa0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
