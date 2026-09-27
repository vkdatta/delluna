export const name="fan-duotone";
export const id="dl_7fefec197a844556b2ec";
export const url=new URL("../icons/fan-duotone.svg?v=df129e76b1bba0fccbb80924e89bfcaefd49b490d43371ac9716b8d6b8e474e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
