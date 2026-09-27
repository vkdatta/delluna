export const name="tipi-thin";
export const id="dl_2e946799284a643cd4eb";
export const url=new URL("../icons/tipi-thin.svg?v=5d483bbaeb06eab55ef728806d570c7d2e67722be4b44cbdd99c1fcf5fba1dd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
