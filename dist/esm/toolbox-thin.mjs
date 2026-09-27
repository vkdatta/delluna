export const name="toolbox-thin";
export const id="dl_ce7444adc82cf48711e2";
export const url=new URL("../icons/toolbox-thin.svg?v=5baa9409074734a8054e874b6ad8400ba86bffc73765361e5c49bce530da970f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
