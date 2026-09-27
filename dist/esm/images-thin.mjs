export const name="images-thin";
export const id="dl_d976dd8fb9474e69a605";
export const url=new URL("../icons/images-thin.svg?v=79ddbdece7af577ba33826842a9184723635f054df8301c80140e1d77910139b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
