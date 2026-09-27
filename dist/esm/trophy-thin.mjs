export const name="trophy-thin";
export const id="dl_a4c97d9aaab35d7ea73a";
export const url=new URL("../icons/trophy-thin.svg?v=9a7a4f3a350155c3243cd199f0727a1a3df7a2b5a5feb7ef50bb78fe8675bfc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
