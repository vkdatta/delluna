export const name="credit_card";
export const id="dl_00ed4c16f4333660abe3";
export const url=new URL("../icons/credit_card.svg?v=ecbf9a1edab017e1ba8517fb9ee2f881af4b9134d191b4e78e33c7ccc6925c4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
