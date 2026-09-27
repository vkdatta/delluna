export const name="file-cpp-thin";
export const id="dl_2ee5a9219526438e952e";
export const url=new URL("../icons/file-cpp-thin.svg?v=758e0a8eece2b67e4f81f506c8a97a0871d438311568d88963cd7f5878c27283",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
