export const name="speed";
export const id="dl_dc8330d9aa0149b89171";
export const url=new URL("../icons/S/speed.svg?v=fc9badac8b2dbda14afcfd77e7c54a728c72cb9100b05d4a3373c2e4e0da9ae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
