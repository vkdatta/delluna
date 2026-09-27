export const name="text-a-underline-light";
export const id="dl_b5e94e064d00b957bbe0";
export const url=new URL("../icons/text-a-underline-light.svg?v=0abff3338d711842b9350e240d10893f61f7aec060b5515239c4b099ea40b3af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
