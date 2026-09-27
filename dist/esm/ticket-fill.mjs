export const name="ticket-fill";
export const id="dl_42742a926c72d949888c";
export const url=new URL("../icons/ticket-fill.svg?v=34a305e27eaacace604a4086c85782f2bbc2c5f9265dc94d00948a7cec548006",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
