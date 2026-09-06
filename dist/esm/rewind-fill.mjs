export const name="rewind-fill";
export const id="dl_226d4f93114c45dbaf1d";
export const url=new URL("../icons/rewind-fill.svg?v=beb5b9c00dcf99c2c7f0849ab17fe25ef4f1893aa02c71fb9876be0df743408d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
