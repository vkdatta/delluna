export const name="imagesearch_roller-fill";
export const id="dl_4d12055ab3013b1fd8a9";
export const url=new URL("../icons/imagesearch_roller-fill.svg?v=cb1f214de3807f1f1ccb442da3674075b1c80623b71d7e2329eca3ba2bae01ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
