export const name="splitscreen_portrait";
export const id="dl_c7cfb56cbe1e194bd42b";
export const url=new URL("../icons/splitscreen_portrait.svg?v=4722edfe6e84d29f6c8ac69cbfb5ee2f6f7c0a79900258a93e7354becbba73f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
