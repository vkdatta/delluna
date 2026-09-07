export const name="map-pin-plus-thin";
export const id="dl_7db1dd90bc3a43c5b1cf";
export const url=new URL("../icons/map-pin-plus-thin.svg?v=60d12029aa9ad74566bf602db8134ad884ebd2f1647e7c771e01556ad4b6ff70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
