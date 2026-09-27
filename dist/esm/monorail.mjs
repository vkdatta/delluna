export const name="monorail";
export const id="dl_2546b017032a06cb9885";
export const url=new URL("../icons/monorail.svg?v=7b8ffbc18a2b1176283417e2451796dc0390aa49182c54663d733a5bd522ca07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
