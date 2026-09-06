export const name="door-open-thin";
export const id="dl_fd83b565c14e465a8c80";
export const url=new URL("../icons/door-open-thin.svg?v=562499c145864c34bdc7c2489a7e07c528699d81ec1253e2edefe377d19b1541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
