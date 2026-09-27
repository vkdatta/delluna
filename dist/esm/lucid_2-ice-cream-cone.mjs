export const name="lucid_2-ice-cream-cone";
export const id="dl_fd42b980a99b4c4084ea";
export const url=new URL("../icons/lucid_2-ice-cream-cone.svg?v=1c66765062e2b3ce4deaf2c7ce1d427ae9234d56c2f0e8cbf8a89f8a400e50d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
