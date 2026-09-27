export const name="airplane_ticket";
export const id="dl_b480cf6e548ada7f1f9c";
export const url=new URL("../icons/airplane_ticket.svg?v=64a56f314e297175932945bfc2fbcb05bcf8748a78ed2c65ed6f2ca284cb9373",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
