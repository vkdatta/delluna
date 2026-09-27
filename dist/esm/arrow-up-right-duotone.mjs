export const name="arrow-up-right-duotone";
export const id="dl_084b2cf640f045f4a194";
export const url=new URL("../icons/arrow-up-right-duotone.svg?v=3ecb55630a03147429913a82b72886bcc9f7587196c9715f822f223ec98f26ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
