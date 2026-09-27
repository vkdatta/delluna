export const name="sticky_note_2";
export const id="dl_4310789f444a7fe1181a";
export const url=new URL("../icons/sticky_note_2.svg?v=374b6b068d3825d83effe8e77d9eb988cf5a74792f058bb58b783277e730d27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
