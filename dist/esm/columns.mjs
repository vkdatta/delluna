export const name="columns";
export const id="dl_1a31197674584a16ab0d";
export const url=new URL("../icons/columns.svg?v=62b6531c5d09f6fb931ad121f2ead6fb0b6466cbf2a2535194475a9535f0d423",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
