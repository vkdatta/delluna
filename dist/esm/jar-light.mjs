export const name="jar-light";
export const id="dl_27f01f88898244709736";
export const url=new URL("../icons/jar-light.svg?v=fdab363c06a9ded7125fe090afd78e006bf77413427a052ba25e8ecd9b4b3d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
