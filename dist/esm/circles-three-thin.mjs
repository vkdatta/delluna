export const name="circles-three-thin";
export const id="dl_8d35d9e7ab7d4415b5c1";
export const url=new URL("../icons/circles-three-thin.svg?v=dbeecc702912d9de6ddf9b0bf9f61391253a92ec1d14ba905acb4d0744c18485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
