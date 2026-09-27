export const name="hallway";
export const id="dl_af1b8f802b294591165f";
export const url=new URL("../icons/hallway.svg?v=79bf4067c78ea96e38767f8f8a4ec7f11be04bdf41518b5695507024615e2b4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
