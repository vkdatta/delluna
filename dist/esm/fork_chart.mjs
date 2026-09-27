export const name="fork_chart";
export const id="dl_b78b57cf1fc0d6fb8c69";
export const url=new URL("../icons/fork_chart.svg?v=5a2a4522ee13d79135b292a633decadad1cbdf0aad3902a00ebf8dcbcd2c39d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
