export const name="tram-front";
export const id="dl_786b1bb617a04861b0ea";
export const url=new URL("../icons/tram-front.svg?v=411835c6b3956d70deeacaed3cc151f6902c9bd3f4149a8356da2c27dd0f72a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
