export const name="smiley-melting-light";
export const id="dl_4c161df8e69d76b4d309";
export const url=new URL("../icons/smiley-melting-light.svg?v=2a57f851d66812b3f0884745c53a1b05925c84caf44378f9925237200adf8f31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
