export const name="solar-panel-thin";
export const id="dl_f4d03cb7b3f040f78ba8";
export const url=new URL("../icons/S/solar-panel-thin.svg?v=e78cbec36cf772e2c9d66f677515ae80d0e92606a217b1fecb03cc949cc70f88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
