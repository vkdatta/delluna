export const name="mail_shield-fill";
export const id="dl_57f64542ba1d95fe3b48";
export const url=new URL("../icons/mail_shield-fill.svg?v=835506a6cb93d6f830b5c7b7ba18d85602058af11168f2e350072fd33238c58c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
