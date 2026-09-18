export const name="counter_2";
export const id="dl_2010dee29af0430bad93";
export const url=new URL("../icons/counter_2.svg?v=621226e585fb322a1af8840acfa6626176ce820eef67d63ae78e8fe6af718a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
