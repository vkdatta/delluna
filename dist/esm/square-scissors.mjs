export const name="square-scissors";
export const id="dl_a1baf5e0482b4d0c85d0";
export const url=new URL("../icons/square-scissors.svg?v=f218b96f0e2451973e7935371133b36dd096adb86812dbe1dcfea5189c7e6c95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
