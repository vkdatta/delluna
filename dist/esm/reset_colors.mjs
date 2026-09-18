export const name="reset_colors";
export const id="dl_3978f928e21243b58b39";
export const url=new URL("../icons/R/reset_colors.svg?v=a1c70da5c1f1d68e2b8a7cd6a9045c081845ca74665b7d1109305e64ef112ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
