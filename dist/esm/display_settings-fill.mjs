export const name="display_settings-fill";
export const id="dl_2d6337e1fd45d22d5d2d";
export const url=new URL("../icons/display_settings-fill.svg?v=560603fd2ca16e066eeb1b7ad9031c00a73c1daf90d37acff7ca211232a6f043",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
