export const name="steam-logo-thin";
export const id="dl_3386791d61527e225931";
export const url=new URL("../../icons/S/steam-logo-thin.svg?v=48a7d4ce3d351ed9d02951797e5c88acd961e97aca3def7107f928a3510ced4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>r.text())}
