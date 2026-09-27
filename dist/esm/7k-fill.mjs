export const name="7k-fill";
export const id="dl_9e8b7b8b322ea247b963";
export const url=new URL("../icons/7k-fill.svg?v=6d245aedf4bfb4ac21a5bad9864755cece9920d5b5881b923cdfa499da1bf131",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
