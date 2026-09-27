export const name="dashboard_2";
export const id="dl_53b7f5a544dabd3b6db3";
export const url=new URL("../icons/dashboard_2.svg?v=5dc5d18434f91be646d8227b107f37ea103fe81b712d86f0766ea7b02d724d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
