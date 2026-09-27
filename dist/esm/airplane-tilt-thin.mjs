export const name="airplane-tilt-thin";
export const id="dl_9ac91103b47044889cf8";
export const url=new URL("../icons/airplane-tilt-thin.svg?v=5c6d5e2917737358e09fea8ef3485efc389496445b00c54b6266a7c17cf94760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
