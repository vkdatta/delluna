export const name="description-fill";
export const id="dl_34190b9fe08e47981d6d";
export const url=new URL("../icons/description-fill.svg?v=c839fa4137cb7a0d123589902bebf77a399f287a40870cf847c4d856e7fdf154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
