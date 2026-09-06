export const name="cell-signal-slash-thin";
export const id="dl_4b6b878938b442d0b257";
export const url=new URL("../icons/cell-signal-slash-thin.svg?v=256c56f950e1b0e250836f39ac09d953a6075b5ce575c244ca235c199f1f6516",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
