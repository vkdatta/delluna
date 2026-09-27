export const name="flutter_dash-fill";
export const id="dl_19a0feb5750ef260228b";
export const url=new URL("../icons/flutter_dash-fill.svg?v=fe6db4e94ca4d5a43304f55bc48e7f48f3f1c7261a9d36b1e1398205c28657c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
