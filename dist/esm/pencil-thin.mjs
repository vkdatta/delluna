export const name="pencil-thin";
export const id="dl_27aa7ee378434118a1ee";
export const url=new URL("../icons/pencil-thin.svg?v=3aa8131371f16218fc91950f15f8945887cbe217887499fa03d3a1ee0b8cc478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
