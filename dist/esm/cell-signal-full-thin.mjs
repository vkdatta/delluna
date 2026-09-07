export const name="cell-signal-full-thin";
export const id="dl_7d2618d2c43145ee9fef";
export const url=new URL("../icons/cell-signal-full-thin.svg?v=67fe7231f8c6210c8680e3b1bbf0635f6da1057b1230780a1efd67edd76f117a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
