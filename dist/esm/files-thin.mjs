export const name="files-thin";
export const id="dl_3e45f658d1db4b18b82b";
export const url=new URL("../icons/files-thin.svg?v=b336af4dfc3920a4a09eacd535e960b52920bfcf7e149b6e7481eeca58126bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
