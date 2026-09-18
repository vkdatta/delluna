export const name="home_improvement_and_tools";
export const id="dl_6710cd14ff234d06bb08";
export const url=new URL("../icons/H/home_improvement_and_tools.svg?v=2e7cf1c3d32c3e11fadfbfb7d27106be0e81eb696af7a5857dcc81f9bdc22426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
