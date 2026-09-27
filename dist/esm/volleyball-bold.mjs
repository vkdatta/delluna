export const name="volleyball-bold";
export const id="dl_43c28105ad405218a0c4";
export const url=new URL("../icons/volleyball-bold.svg?v=4c081a1b330543d0db0e4b727878e9b668cee57d6a03eb36131bd0f4302ef90d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
