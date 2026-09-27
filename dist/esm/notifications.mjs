export const name="notifications";
export const id="dl_4822007eee9f5912283e";
export const url=new URL("../icons/notifications.svg?v=aa8b65ad462f30ef0eb95be25cbbe73cd4c29d9aab7783f860e928b03c27de4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
