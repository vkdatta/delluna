export const name="stack_vertical";
export const id="dl_59c35b3211707c0761ef";
export const url=new URL("../icons/stack_vertical.svg?v=102a4f8d07a3f6b1efde2301e5c66ee6fd6ed2603aeaa251b0ba0fc8147b9b88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
