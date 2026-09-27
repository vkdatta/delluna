export const name="headphones-bold";
export const id="dl_86526ac843034e91b6ae";
export const url=new URL("../icons/headphones-bold.svg?v=3dcfa9db20557825d707fa89b9a21f74c68b771b12d7e169179f5bc00387efa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
