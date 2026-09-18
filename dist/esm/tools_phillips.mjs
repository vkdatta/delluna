export const name="tools_phillips";
export const id="dl_375d3cbe01c64ba8afc8";
export const url=new URL("../icons/T/tools_phillips.svg?v=038f4e58f4b41e5891f0512a36e2afee48ec67ef48e39ae0ea068c29e2975255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
