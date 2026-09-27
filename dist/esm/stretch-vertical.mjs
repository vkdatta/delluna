export const name="stretch-vertical";
export const id="dl_f18cb42b773e433fb42d";
export const url=new URL("../icons/stretch-vertical.svg?v=a68643ebe1a4146a80be81710881c4b0d0edaa207af83c5b1522e3ec33fc9abc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
