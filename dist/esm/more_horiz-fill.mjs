export const name="more_horiz-fill";
export const id="dl_05cfe1dfbd4b74d57016";
export const url=new URL("../icons/more_horiz-fill.svg?v=fe57c3dbfacce6b196e48938fe13f7ef4225c7f263edd0703b406ec2c257515e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
