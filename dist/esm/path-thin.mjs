export const name="path-thin";
export const id="dl_30f8b6672b324b9fbc58";
export const url=new URL("../icons/path-thin.svg?v=04613be539859cef69fc9d184f8c69b4c6c5ff082301c9fe32772a6f9e8f125b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
