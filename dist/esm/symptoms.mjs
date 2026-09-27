export const name="symptoms";
export const id="dl_91fcff41db615741cccb";
export const url=new URL("../icons/symptoms.svg?v=710b58c557cfb066226c778ea7771e734fbc3644dab945fff6befa1f019b8242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
